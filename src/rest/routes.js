const base = process.env.REACT_APP_API_BASE_URL;

const routes = {
    routeBase: () => `${base}/`,
    routePlace: () => `${base}/places/`,
    routeId: (id) => `${base}/places/${id}`,
    sample: () => `${base}/places/`
}

export default routes;