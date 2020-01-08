package com.tim.core.models;

import java.util.Map;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ContainerExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.day.cq.wcm.foundation.model.responsivegrid.ResponsiveGrid;
import com.day.cq.wcm.foundation.model.responsivegrid.export.ResponsiveGridExporter;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = SlingHttpServletRequest.class, 
    adapters = { ComponentExporter.class }, 
    resourceType = { ContainerModel.RESOURCE_TYPE }
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, 
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
@JsonSerialize(as = ContainerModel.class)
public class ContainerModel extends ResponsiveGrid implements ComponentExporter {
    static final String RESOURCE_TYPE = "react-typescript-demo/components/container";
    private final String DEFAULT_AMOUNT = "1";

    @ValueMapValue
    @Optional
    private String rowAmount;

    @ValueMapValue
    @Optional
    private String columnAmount;

    public String getColumnAmount() {
        if (columnAmount != null && columnAmount.length() > 0) {
            return columnAmount;
        }
        return DEFAULT_AMOUNT;
    }

    public String getRowAmount() {
        if (rowAmount != null && rowAmount.length() > 0) {
            return rowAmount;
        }
        return DEFAULT_AMOUNT;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}