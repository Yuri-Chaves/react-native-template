# 🥳 Thank you for using my template 🥳

## Here are some tips and information about it

#### The template has the following dependencies:

##### dependencies
- [react-native-svg](https://github.com/software-mansion/react-native-svg)
- [restyle](https://github.com/Shopify/restyle)
- [react-navigation](https://reactnavigation.org/)
- [react-hook-form](https://www.react-hook-form.com/)
- [react-native-element-dropdown](https://github.com/hoaphantn7604/react-native-element-dropdown)
- [axios](https://axios-http.com/)
- [mmkv](https://github.com/mrousavy/react-native-mmkv)
- [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

##### devDependencies
- [plopjs](https://plopjs.com/)
- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
- [@types/jest](https://www.npmjs.com/package/@types/jest)
- [@testing-library/react-native](https://testing-library.com/docs/react-native-testing-library/intro/)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [msw](https://mswjs.io/)

#### The project also includes some basic components and services
> To learn more about each one, navigate to the component or service folder and open the README file.

##### 🔩 Components 🔩
- ActivityIndicator
- Alert
- Box
- Button
- Dropdown
- AuthForm
- Icon
- InfinityScrollList
- PasswordInput
- Screen
- Table
- Text
- TextBox
- TextInput
> Components such as ActivityIndicator, Alert, Text, and TextInput replace the React Native core components, integrating them with the project theme.

##### ⚙️ Services ⚙️
- authCredentials
- settings
- storage
> Although the project includes an authentication service, there is no validation system. The service simply stores the user's name in the storage.

#### 🗃️ Project structure 🗃️
- **assets**: Contains font files and icons used by the project.
- **components**: Contains basic components.
- **domain**: Handles API communication, processing received data before sending it to the application layer.
- **hooks**: Contains custom hooks.
- **infra**: Contains hooks and typings for react query.
- **instances**: Contains axios instances for the APIs.
- **routes**: Contains application routes, separated into "app routes" and "auth routes", along with their typings.
- **screens**: Contains the screens for the app stack and the auth stack.
- **services**: Stores project services.
- **test**: Contains configurations for the project's testing libraries (_Jest_, _React Native Testing Library_, and _MSW_).
- **theme**: Contains theme definitions, including _spacing_, _border radius_ sizes, and _colors_ for both light and dark themes.
- **types**: Contains type definition files.
- **utils**: Contains utility functions.

> For demonstration purposes, the project uses the [Catfact](https://catfact.ninja) API for requests.

## 🔧 Configs 🔧

#### react navigation
`react-native-screens` package requires one additional configuration step to properly work on Android devices. Edit `MainActivity.kt` or `MainActivity.java` file which is located under `android/app/src/main/java/<your package name>/`.

Add the following code to the body of `MainActivity` class:

<p style="color: #c711e1;font-size: 24px; text-align: center">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.0907 21.0907H2.90918V2.90924H21.0907L11.9999 12L21.0907 21.0907Z" fill="url(#paint0_linear_570_36)"/>
  <defs>
    <linearGradient id="paint0_linear_570_36" x1="21.0908" y1="2.90899" x2="2.90903" y2="21.0907" gradientUnits="userSpaceOnUse">
      <stop offset="0.003" stop-color="#E44857"/>
      <stop offset="0.469" stop-color="#C711E1"/>
      <stop offset="1" stop-color="#7F52FF"/>
    </linearGradient>
  </defs>
</svg>
MainActivity.kt
</p>

```kt
class MainActivity: ReactActivity() {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}
```

<P style="color: #EA2D2E;font-size: 24px; text-align: center">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.92824 18.3975C8.92824 18.3975 8.03443 18.9176 9.56518 19.0931C11.4199 19.305 12.3677 19.2746 14.4111 18.8884C14.4111 18.8884 14.9494 19.225 15.6998 19.5167C11.1175 21.4798 5.32956 19.4029 8.92824 18.3975ZM8.36799 15.8353C8.36799 15.8353 7.36524 16.5776 8.89731 16.7363C10.8786 16.9408 12.4429 16.9575 15.1512 16.4363C15.1512 16.4363 15.5249 16.816 16.1134 17.0233C10.5743 18.6433 4.40481 17.1508 8.36799 15.8353Z" fill="#0074BD"/>
  <path d="M13.088 11.4883C14.2177 12.7886 12.7917 13.9577 12.7917 13.9577C12.7917 13.9577 15.6584 12.4781 14.3422 10.6245C13.1123 8.89669 12.1696 8.0385 17.2737 5.07825C17.2737 5.07843 9.26166 7.07887 13.088 11.4883Z" fill="#EA2D2E"/>
  <path d="M19.148 20.2929C19.148 20.2929 19.8096 20.8386 18.419 21.2602C15.7748 22.0612 7.41158 22.3027 5.08883 21.2923C4.25427 20.9289 5.81989 20.4251 6.31246 20.3188C6.82602 20.2076 7.11927 20.2279 7.11927 20.2279C6.19058 19.5741 1.11683 21.5122 4.54246 22.0682C13.8839 23.5824 21.5706 21.3862 19.148 20.2929ZM9.35839 13.1801C9.35839 13.1801 5.10477 14.1906 7.85221 14.5579C9.01246 14.7131 11.3243 14.6775 13.4793 14.4967C15.2399 14.3488 17.0067 14.0329 17.0067 14.0329C17.0067 14.0329 16.3865 14.2989 15.9372 14.6053C11.6168 15.7417 3.27271 15.2124 5.67514 14.0507C7.70614 13.0684 9.35839 13.1801 9.35839 13.1801ZM16.9891 17.4452C21.3805 15.1639 19.3499 12.9714 17.9326 13.2667C17.5861 13.3389 17.4306 13.4017 17.4306 13.4017C17.4306 13.4017 17.5596 13.1994 17.8056 13.1124C20.6093 12.1271 22.7652 16.0192 16.9013 17.5609C16.9013 17.5605 16.9686 17.4996 16.9891 17.4452Z" fill="#0074BD"/>
  <path d="M14.342 0.297546C14.342 0.297546 16.7735 2.73055 12.0352 6.47061C8.23535 9.47173 11.1688 11.1825 12.0339 13.1379C9.81559 11.1367 8.18847 9.3748 9.27991 7.73511C10.8827 5.32873 15.3228 4.16155 14.342 0.297546Z" fill="#EA2D2E"/>
  <path d="M9.79026 23.6289C14.0045 23.8984 20.4778 23.4789 20.6309 21.4847C20.6309 21.4847 20.3364 22.2407 17.1478 22.8405C13.5504 23.5177 9.11263 23.4388 6.48145 23.0044C6.48145 23.0046 7.02051 23.4508 9.79026 23.6289Z" fill="#0074BD"/>
</svg>
MainActivity.java
</p>

```java
public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}
```

and make sure to add the following import statement at the top of this file below your package statement:

```
import android.os.Bundle;
```

📨 For any questions or suggestions, please don't hesitate to send an email to [Yuri.Chaves39@hotmail.com](mailto:Yuri.Chaves39@hotmail.com) 📨