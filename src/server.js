const defaultServer = "https://p4brrcnh-8000.asse.devtunnels.ms/api/v2";
const defaultBackendUrl = "https://p4brrcnh-8000.asse.devtunnels.ms/";

const apiBaseUrl =
  process.env.REACT_APP_API_URL ||
  process.env.REACT_APP_BACKEND_URL ||
  defaultServer;

const backendBaseUrl =
  process.env.REACT_APP_BACKEND_BASE_URL ||
  process.env.REACT_APP_API_ORIGIN ||
  defaultBackendUrl;

export const server = apiBaseUrl;
export const backend_url = backendBaseUrl.endsWith("/")
  ? backendBaseUrl
  : `${backendBaseUrl}/`;
export const socketEndpoint =
  process.env.REACT_APP_SOCKET_URL ||
  (backendBaseUrl.endsWith("/")
    ? backendBaseUrl.slice(0, -1)
    : backendBaseUrl);
