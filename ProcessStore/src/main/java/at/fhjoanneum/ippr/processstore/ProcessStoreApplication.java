package at.fhjoanneum.ippr.processstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ProcessStoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProcessStoreApplication.class, args);
	}
}
