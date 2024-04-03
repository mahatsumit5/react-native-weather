import { Stack } from "expo-router/stack";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
}
