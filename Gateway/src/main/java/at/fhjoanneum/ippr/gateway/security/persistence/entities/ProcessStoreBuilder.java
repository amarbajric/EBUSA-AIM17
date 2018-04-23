package at.fhjoanneum.ippr.gateway.security.persistence.entities;

import at.fhjoanneum.ippr.gateway.security.persistence.Builder;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.ProcessStore;
import org.apache.commons.lang3.StringUtils;

import java.util.Date;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

public class ProcessStoreBuilder implements Builder<ProcessStore> {

    private String processName;
    private String processDescription;
    private UserImpl creator;
    private Date createdAt;
    private Integer version;
    private Float price;
    private String state;

    public ProcessStoreBuilder processName(final String processName){
        checkArgument(StringUtils.isNotBlank(processName));
        this.processName = processName;
        return this;
    }

    public ProcessStoreBuilder processDescription(final String processDescription){
        checkArgument(StringUtils.isNotBlank(processDescription));
        this.processDescription = processDescription;
        return this;
    }

    public ProcessStoreBuilder creator(final UserImpl creator){
        checkNotNull(creator);
        this.creator = creator;
        return this;
    }

    public ProcessStoreBuilder createdAt(final Date createdAt){
        checkNotNull(createdAt);
        this.createdAt = createdAt;
        return this;
    }

    public ProcessStoreBuilder version(final Integer version){
        checkNotNull(version);
        this.version = version;
        return this;
    }

    public ProcessStoreBuilder price(final Float price){
        checkNotNull(price);
        this.price = price;
        return this;
    }

    public ProcessStoreBuilder state(final String state){
        checkArgument(StringUtils.isNotBlank(state));
        this.state = state;
        return this;
    }

    @Override
    public ProcessStore build() {
        checkArgument(StringUtils.isNotBlank(processName));
        checkArgument(StringUtils.isNotBlank(processDescription));
        checkNotNull(creator);
        checkNotNull(createdAt);
        checkNotNull(version);
        checkNotNull(price);
        checkArgument(StringUtils.isNotBlank(state));

        return new ProcessStoreImpl(processName, processDescription, creator, createdAt, version, price, state);
    }
}
