import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "mesh-one-word-wall",
  description: "A shared one-word wall for group reflection and check-ins.",
  accentHex: "#a04c7c",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});
