package at.fhjoanneum.ippr.gateway.security.persistence.objects;

import at.fhjoanneum.ippr.gateway.security.persistence.entities.UserImpl;

import java.util.Date;

public interface ProcessStore {

    Long getStoreId();

    String getProcessName();

    void setProcessName(String processName);

    String getProcessDescription();

    void setProcessDescription(String processDescription);

    UserImpl getCreator();

    void setCreator(UserImpl creator);

    Date getCreatedAt();

    void setCreatedAt(Date createdAt);

    Integer getVersion();

    void setVersion(Integer version);

    Float getPrice();

    void setPrice(Float price);

    String getState();

    void setState(String state);

}
