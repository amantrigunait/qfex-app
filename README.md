# React Native App
---

## 🚀 Getting Started (iOS)

### 1. Install dependencies

```sh
yarn
```

### 2. Install iOS pods

```sh
cd ios && pod install
```

### 3. Run the app

```sh
yarn ios
```

---

## 🔮 Future Changes

1. **Proper custom Axios setup with API call using React Query**  
   - Create a centralized `axios` instance with interceptors.
   - Use `react-query` for API integration, caching, and automatic retries.

2. **Error Boundary Handling**  
   - Implement a reusable Error Boundary to catch rendering errors and show fallback UIs.

3. **Theme Setup**  

4. **Loader on API Calls**  
   - Integrate loading indicators tied to `react-query`’s `isLoading`/`isFetching` states.
   - Optionally build a global loader overlay.

---
