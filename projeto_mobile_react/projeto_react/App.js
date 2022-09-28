import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/components/Cadastro';
import Pagina_Inicial from './src/components/Pagina_Inicial';
import Login from './src/components/Login';
import Home from './src/components/Home';
import AddItem from './src/components/AddItem';
import EditarItem from './src/components/EditarItem';
import ListaProdutos from './src/components/ListaProdutos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Página Inicial' options={{headerShown: false}} component={Pagina_Inicial}/>
          <Stack.Screen name='Cadastro' component={Cadastro}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Home' options={{headerShown: false}} component={Home}/>
          <Stack.Screen name='Adicionar Item' component={AddItem}/>
          <Stack.Screen name='Editar Item' component={EditarItem}/>
          <Stack.Screen name='Itens' component={ListaProdutos}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
