package at.fhjoanneum.ippr.pmstorage.examples;

import java.io.File;
import java.io.FileReader;
import java.io.InputStream;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.apache.jena.ontology.OntClass;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.ontology.OntModelSpec;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.util.iterator.ExtendedIterator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javassist.bytecode.Descriptor.Iterator;



@Component
@Transactional
public class VacationRequestFromOWL extends AbstractExample {

  private static final Logger LOG = LoggerFactory.getLogger(VacationRequestFromOWL.class);

  @PersistenceContext
  private EntityManager entityManager;

  @Override
  protected EntityManager getEntityManager() {
    return entityManager;
  }

  @Override
  protected void createData() {
	  try {
		InputStream is = this.getClass().getResourceAsStream("/ontologies/VacationRequest.owl");
		OntModel model = ModelFactory.createOntologyModel(OntModelSpec.OWL_DL_MEM);
		
		model.read(is,null);
		model.write(System.out,"RDF/XML-ABBREV");
		for(OntClass klass : model.listClasses().toList()) {
			System.out.println(klass.getURI());
		};
	  } catch (Exception e) {
	  	e.printStackTrace();
	  }
   
  }

  @Override
  protected String getName() {
    return "Vacation Request From OWL";
  }
}