import { Suspense } from "react";
import UserInfo from "microReact/UserInfo";

export default () => {
  return (
    <Suspense fallback={<div>Loading React Micro Frontend...</div>}>
      <UserInfo />
    </Suspense>
  );
};
