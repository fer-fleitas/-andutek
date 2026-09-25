export const SELECT_SERVICE_EVENT = "nandutek:select-service";

/** Preselecciona un servicio en el formulario de contacto y desplaza hasta él. */
export function selectService(serviceTitle: string) {
  window.dispatchEvent(new CustomEvent<string>(SELECT_SERVICE_EVENT, { detail: serviceTitle }));
}
