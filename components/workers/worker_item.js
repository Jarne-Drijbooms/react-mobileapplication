import { Text, Pressable, View } from 'react-native';

//theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

export default function WorkerItem({ item, onPress }) {
  const style = useThemedStyles(styles);
  
  return (
    <Pressable style={style.flatListItem} onPress={() => onPress(item)}>
      <View style={style.flatListTitle}>
        <Text style={[style.text, style.flatListTitleText]}>{item.worker.name}</Text>
      </View>
      <View>
        <Text style={[style.text, style.flatListInfo]}>{item.worker.country}</Text>
        <Text style={[style.text, style.flatListInfo]}>{item.worker.city}</Text>
      </View>
    </Pressable>
  );
};