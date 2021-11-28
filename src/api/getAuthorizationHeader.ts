import JsSHA1 from "jssha";

const getAuthorizationHeader = () => {
  const AppID = import.meta.env.VITE_APP_PTX_ID;
  const AppKey = import.meta.env.VITE_APP_PTX_KEY;

  const GMTString = new Date().toUTCString();
  const ShaObj = new JsSHA1("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update(`x-date: ${GMTString}`);
  const HMAC = ShaObj.getHMAC("B64");

  return {
    "Content-Type": "application/json",
    Authorization: `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`,
    "X-Date": GMTString
  };
};

export default getAuthorizationHeader;
