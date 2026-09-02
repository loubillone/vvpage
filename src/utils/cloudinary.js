const CLOUD_NAME = "dwb5tmtqg";

export const getCloudinaryUrl = (publicId) => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_1000,h_600,c_fill,g_auto,f_auto,q_auto/${publicId}`;
};
