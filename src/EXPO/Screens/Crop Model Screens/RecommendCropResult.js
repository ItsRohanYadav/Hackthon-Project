import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import crop_data from '../../../../constants/crop_data';

const RecommendCropResult = ({ route }) => {
  // const { cropData }  = route.params;
  const  cropData   = crop_data[0];



  return (
    <ScrollView style={styles.container}>
      <View style = {{ marginBottom : 30}}>

      <Image source={ cropData.image } style={styles.image} />
      <Text style={styles.name}>{cropData.name}</Text>

      <Text style={styles.description}>{cropData.description}</Text>
      <View style={styles.detailsContainer}>

        <Text style={styles.detailLabel}>Soil:</Text>
        <Text style={styles.detailText}>{cropData.soil}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Season:</Text>
        <Text style={styles.detailText}>{cropData.season}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Climate:</Text>
        <Text style={styles.detailText}>{cropData.climate}</Text>
      </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf :'center'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform:'capitalize',
    textAlign :'center'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
  },
});

export default RecommendCropResult;
