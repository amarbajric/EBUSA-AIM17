package at.fhjoanneum.ippr.gateway.security.persistence.entities;

import at.fhjoanneum.ippr.gateway.security.persistence.Builder;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.ProcessStore;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.StringUtils;

import java.util.List;

import static com.google.common.base.Preconditions.checkArgument;

public class OrganizationBuilder implements Builder<Organization> {

    private String systemId;
    private String organizationName;
    private String organizationDescription;
    private final List<ProcessStoreImpl> processes = Lists.newArrayList();

    public OrganizationBuilder systemId(final String systemId) {
        checkArgument(StringUtils.isNotBlank(systemId));
        this.systemId = systemId;
        return this;
    }

    public OrganizationBuilder organizationName(final String organizationName) {
        checkArgument(StringUtils.isNotBlank(organizationName));
        this.organizationName = organizationName;
        return this;
    }

    public OrganizationBuilder organizationDescription(final String organizationDescription) {
        checkArgument(StringUtils.isNotBlank(organizationDescription));
        this.organizationDescription = organizationDescription;
        return this;
    }

    public OrganizationBuilder addProcess(final ProcessStore process) {
        checkArgument(process instanceof ProcessStoreImpl);
        processes.add((ProcessStoreImpl) process);
        return this;
    }


    @Override
    public Organization build() {
        checkArgument(StringUtils.isNotBlank(systemId));
        checkArgument(StringUtils.isNotBlank(organizationName));
        checkArgument(StringUtils.isNotBlank(organizationDescription));

        return new OrganizationImpl(organizationName, organizationDescription, systemId, processes);
    }
}
