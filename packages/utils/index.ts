// Remote App 에서 SAP로 Routing 을 할수 있도록 하는 함수
export const navigateTo = (route: Object) => {
  const evt = new CustomEvent("remoteNavigateTo", { detail: route });
  document.dispatchEvent(evt);
};