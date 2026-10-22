const CLOUD_NAME = "dwb5tmtqg";

const TRANSFORMS = {
  card: "w_800,ar_4:3,c_fill,g_auto/q_auto/f_auto",
  detail: "w_1400,c_limit/q_auto/f_auto",
  original: "q_auto/f_auto",
  // Retratos de Biografía/Home: limita ancho, no recorta (sin c_fill / ar_).
  bio: "w_1000,c_limit/q_auto/f_auto",
  // Miniaturas personalizadas de Discursos (16:9): limita ancho, no recorta;
  // el encuadre 16:9 lo da la card (DiscursoCard / discursoCard.css).
  discurso: "w_960,c_limit/q_auto/f_auto",
  // Banners anchos del Home (AccesoProduccionHome): limita ancho, no recorta;
  // el encuadre lo da object-fit en el CSS según el breakpoint. Con c_limit
  // no amplía: una foto más angosta que 1600 se entrega en su ancho real.
  banner: "w_1600,c_limit/q_auto/f_auto",
};

export const getCloudinaryUrl = (publicId, preset) => {
  const transform = TRANSFORMS[preset] || TRANSFORMS.detail;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/${publicId}`;
};
