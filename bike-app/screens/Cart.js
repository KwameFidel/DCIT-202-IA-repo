import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function CartList(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingTop: 50,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Ionicons name="arrow-back-outline" size={30} color="#000" />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fd9843' }}>
          Cart List
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Ionicons
            style={{ marginLeft: 15 }}
            name="person-outline"
            size={30}
            color="#000"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 10,
          padding: 2,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <Image
              style={{
                width: 130,
                marginTop: 7,
                height: 100,
                resizeMode: 'stretch',
              }}
              source={require('./pictures/MaleSneaker1.png')}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            St Mawes Watch
          </Text>
          <Text
            style={{
              color: 'rgb(174, 175, 176)',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            Air max Sneakers
          </Text>

          <Text style={{ textAlign: 'center' }}>
            <Text style={{ color: 'orange' }}>$</Text>
            <Text style={{ color: 'black', fontWeight: 'bolder' }}>
              1,700.00
            </Text>
          </Text>
        </View>

        <Ionicons name="remove-circle" size={20} />
        <Text>1</Text>
        <Ionicons name="add-circle" size={20} color="orange" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          borderRadius: 10,
          padding: 2,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <Image
              style={{
                width: 130,
                marginTop: 7,

                height: 100,
                resizeMode: 'stretch',
              }}
              source={require('./pictures/MaleSneaker3.png')}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            Nike Sneakers{' '}
          </Text>
          <Text
            style={{
              color: 'rgb(174, 175, 176)',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            For Men
          </Text>

          <Text style={{ textAlign: 'center' }}>
            <Text style={{ color: 'orange' }}>$</Text>
            <Text style={{ color: 'black', fontWeight: 'bolder' }}>160.00</Text>
          </Text>
        </View>

        <Ionicons name="remove-circle" size={20} />
        <Text>1</Text>
        <Ionicons name="add-circle" size={20} color="orange" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          borderRadius: 10,
          padding: 2,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <Image
              style={{
                width: 130,
                marginTop: 7,

                height: 100,
                resizeMode: 'stretch',
              }}
              source={require('./pictures/MaleSneaker4.png')}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            Addidas sneakers
          </Text>
          <Text
            style={{
              color: 'rgb(174, 175, 176)',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            Classic{' '}
          </Text>

          <Text style={{ textAlign: 'center' }}>
            <Text style={{ color: 'orange' }}>$</Text>
            <Text style={{ color: 'black', fontWeight: 'bolder' }}>
              1,700.00
            </Text>
          </Text>
        </View>

        <Ionicons name="remove-circle" size={20} />
        <Text>1</Text>
        <Ionicons name="add-circle" size={20} color="orange" />
      </View>

      <TouchableOpacity
        style={{
          padding: 10,
          paddingHorizontal: 80,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          flexDirection: 'row',
          backgroundColor: '#fd9843',
        }}>
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>
          Proceed to Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
