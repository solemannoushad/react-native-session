
// rnf => shortcut to generate functional component 
import { SafeAreaView } from 'react-native';
import Home from './screens/Home';

export default function App() {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Home/>
    </SafeAreaView>
  );
}
