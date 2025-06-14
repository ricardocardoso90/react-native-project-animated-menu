import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#003049'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 30,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  options: {
    flex: 1,
    gap: 7,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});