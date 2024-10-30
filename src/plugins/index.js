/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import router from "@/router";
import vuetify from "./vuetify";
import { createPinia } from "pinia";

const pinia = createPinia();

export function registerPlugins(app) {
  app.use(pinia);
  app.use(vuetify);
  app.use(router);
}
