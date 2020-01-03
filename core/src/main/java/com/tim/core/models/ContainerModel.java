package com.tim.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.day.cq.wcm.foundation.model.responsivegrid.ResponsiveGrid;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = SlingHttpServletRequest.class,
    adapters = {ContainerModel.class, ResponsiveGrid.class, ComponentExporter.class},
    resourceType = ContainerModel.RESOURCE_TYPE
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
@JsonSerialize(as = ContainerModel.class)
public class ContainerModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "react-typescript-demo/components/container";

    private final String DEFAULT_AMOUNT = "1";

    @ValueMapValue @Optional
    private String rows;

    @ValueMapValue @Optional
    private String columns;

    public String getColumns() {
        if(columns != null && columns.length() > 0) {
            return columns;
        }
        return DEFAULT_AMOUNT;
    }

    public String getRows() {
        if(rows != null && rows.length() > 0) {
            return rows;
        }
        return DEFAULT_AMOUNT;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}