package com.tim.core.models.impl;

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
    resourceType = TextModel.RESOURCE_TYPE
)
 @Exporter(
     name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
     extensions = ExporterConstants.SLING_MODEL_EXTENSION
 )
public class TextModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "react-typescript-demo/components/text";

    @ValueMapValue @Optional
    private String text;

    @ValueMapValue @Optional
    private String variant;

    public String getText() {
        if(text != null && text.length() > 0) {
            return text;
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