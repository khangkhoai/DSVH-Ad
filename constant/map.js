const API_KEY = 'AIzaSyCLyiYAfywcXj0n35P4x0zP9vkyeuEeOxY';
const CALLBACK_NAME = 'gmapsCallback';

let initialized = !!window.google;
let resolveInitPromise;
let rejectInitPromise;
/**
 * Promise xử lý quá trình khởi tạo
 * trạng thái của google maps script.
 */
const initPromise = new Promise((resolve, reject) => {
  resolveInitPromise = resolve;
  rejectInitPromise = reject;
});

export default function init() {
  /**
   * Nếu Google Maps đã được khởi tạo trước đó
   * return promise
   */
  if (initialized) return initPromise;

  initialized = true;
  
  /**
   * Hàm call back được gọi khi google được load thành công
   * Ở đây nó sẽ thực hiện resolve ra biến window.google chính là google object
   * được dùng để khởi tạo google map, google service như trong document của google.
    */
  window[CALLBACK_NAME] = () => resolveInitPromise(window.google);

  /**
    * Tạo một element là script với src là đường dẫn để gọi google map
    * và chèn nó vào head của page
    * nếu có lỗi xảy ra sẽ reject promise để khi gọi để những chỗ gọi đến nó có thể catch được.
    */
     
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`;
  script.onerror = rejectInitPromise;
  document.querySelector('head').appendChild(script);

  // return promise để chỗ gọi biết được rằng đã được xử lý xong.
  return initPromise;
}