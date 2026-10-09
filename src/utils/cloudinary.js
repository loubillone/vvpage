const CLOUD_NAME = "dwb5tmtqg";

const TRANSFORMS = {
  card: "w_800,ar_4:3,c_fill,g_auto/q_auto/f_auto",
  detail: "w_1400,c_limit/q_auto/f_auto",
  original: "q_auto/f_auto",
  // Retratos de Biografía/Home: limita ancho, no recorta (sin c_fill / ar_).
  bio: "w_1000,c_limit/q_auto/f_auto",
};

export const getCloudinaryUrl = (publicId, preset) => {
  const transform = TRANSFORMS[preset] || TRANSFORMS.detail;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/${publicId}`;
};
