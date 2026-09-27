const CLOUD_NAME = "dwb5tmtqg";

const TRANSFORMS = {
  card: "w_800,ar_4:3,c_fill,g_auto/q_auto/f_auto",
  detail: "w_1400,c_limit/q_auto/f_auto",
  original: "q_auto/f_auto",
};

// Sin preset: mismo recorte 1000×600 que ya usan Senado y cualquier
// llamada que todavía no migró. No cambiar este string.
const LEGACY = "w_1000,h_600,c_fill,g_auto,f_auto,q_auto";

export const getCloudinaryUrl = (publicId, preset) => {
  const transform = TRANSFORMS[preset] || LEGACY;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/${publicId}`;
};
