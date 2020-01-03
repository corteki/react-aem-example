package com.tim.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model()
@Exporter()
public class ContainerModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "";

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}