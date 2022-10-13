import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);


const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        title="Monday"
        onPress={() => Alert.alert('Turn notifications on/off, Set time')}
      />
    </View>
    <Separator />

   <View>
      <Text style={styles.title}>
      </Text>
      <Button
        title="Tuesday"
        onPress={() => Alert.alert('Turn notifications on/off, Set time')}
      />
    </View>
    <Separator  />

    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        title="Wednesday"
        onPress={() => Alert.alert('Turn notifications on/off, Set time')}
      />
    </View>
    <Separator  />

    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        title="Thursday"
        onPress={() => Alert.alert('Turn notifications on/off, Set time')}
      />
    </View>
    <Separator  />

    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        title="Friday"
        onPress={() => Alert.alert('Turn notifications on/off, Set time')}
      />
    </View>
    <Separator  />

    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        title="Saturday"
        onPress={() => Alert.alert('Turn notifications on/off, Set time')}
      />
    </View>
    <Separator  />

    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        title="Sunday"
        onPress={() => Alert.alert('Turn notifications on/off, Set time')}
      />
    </View>
    <Separator  />

    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        title="Settings"
        onPress={() => Alert.alert('About, Privacy Policy, Share the App, Buy us a coffee, FAQ, Contact Support')}
        
      />
    </View>
    <Separator  />

    {/* *<View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>  */}
    
    <Separator />
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;