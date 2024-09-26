# My React Native SDK

A custom React Native SDK to simplify your app development.

## Installation

```bash
npm install my-react-native-sdk
```

## Usage

```js
import { add, fetchData, useAuth } from 'my-react-native-sdk';

const sum = add(10, 5);
const data = await fetchData('users');
const isAuthenticated = useAuth(token);
```
