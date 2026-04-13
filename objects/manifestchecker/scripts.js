function normalizeUnits(manifest) {
  if (manifest.unit === "lb") {
    return { ...manifest, weight: manifest.weight * 0.45, unit: "kg" };
  }
  return { ...manifest };
}

function validateManifest(manifest) {
  let errors = {};

  // containerId — must be a positive integer
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  // destination — must be a non-empty string after trimming
  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  // weight — must be a positive number and not NaN
  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0) {
    errors.weight = "Invalid";
  }

  // unit — must be exactly "kg" or "lb"
  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // hazmat — must be a boolean
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  let errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    let normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}