package com.tim.core.models;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = SlingHttpServletRequest.class,
    adapters = {ComponentExporter.class},
    resourceType = ButtonModel.RESOURCE_TYPE
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class ButtonModel implements ComponentExporter {
    
    static final String RESOURCE_TYPE = "react-typescript-demo/components/button";

    @ValueMapValue @Optional
    private String label;

    @ValueMapValue @Optional
    private String variant;

    public String getLabel() {
        if(label != null && label.length() > 0) {
            return label;
        }
        return null;
    }

    public String getVariant() {
        if(variant != null && variant.length() > 0) {
            return variant;
        }
        return null;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }

}