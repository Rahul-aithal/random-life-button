import { StyleSheet, Text, View, Pressable } from 'react-native';


interface propsI {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  randomValues:{data:string,title:string}
}

export default function Modal({ setShow,randomValues }: propsI) {
  
  return (
    <View style={styles.overlay}>
      <View style={styles.modalBox}>
        <Text style={styles.title}>{randomValues.title}</Text>

        <Text style={styles.message}>
          {randomValues.data}
        </Text>

        <Pressable
          onPress={() => setShow(false)}
          style={[
            styles.button,
             
          ]}
        >
          <Text style={styles.buttonText}>{"Close"}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#1e1e1e',
    width: '100%',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  
    // 🌑 iOS Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  
    // 🌞 Android Shadow
    elevation: 10,
  },
  
  title: {
    fontSize: 24, // Slightly bigger for emphasis
    fontWeight: '800', // Extra bold
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
    letterSpacing: 0.8,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
    color: '#f5f5f5', // brighter than #aaa
    fontWeight: '700',
    letterSpacing: 0.5,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  
  button: {
    backgroundColor: '#383838',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#555',
  
    // Shadow for depth (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  
    // Elevation for Android
    elevation: 6,
  },
  
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
