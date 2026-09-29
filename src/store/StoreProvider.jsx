// 'use client'
// import { useEffect, useRef } from "react";
// import { Provider } from "react-redux";
// import { persistStore } from "redux-persist";
// import { makeStore } from "./store";

// export default function StoreProvider({ children }) {
//   const storeRef = useRef(null);
//   if (!storeRef.current) storeRef.current = makeStore();

//   useEffect(() => {
//     const persistor = persistStore(storeRef.current);
//     return () => persistor.pause();
//   }, []);

//   return <Provider store={storeRef.current}>{children}</Provider>;
// }
