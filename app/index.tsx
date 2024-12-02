import 'react-native-reanimated';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default function Index() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <MaterialIcons name="menu" size={24} color="black" />
                    <Text style={styles.headerText}>BYKEA</Text>
                    <MaterialIcons name="add-call" size={24} color="black" />
                </View>
                {/* Banner image */}
                <View style={styles.bannerImgView}>
                    <Image
                        style={styles.bannerImg}
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQzwjbXzb6hQYGnitjGce_YfI0YY6e6yTzg&s" }}
                    />
                </View>
                {/* Info View */}
                <View style={styles.infoView}>
                    <MaterialIcons name="attach-money" size={24} color="green" />
                    <MaterialIcons name="message" size={24} color="green" />
                </View>
                {/* Bottom container */}
                <View style={styles.bottomContainer}>
                    <View style={styles.row}>
                        <Card title={'Carpool'} ican={'electric-car'} bgColor={'#78BB9A'} />
                        <Card title={'electric-bike'} ican={'electric-bike'} bgColor={'#6FE0CE'} />
                    </View>
                    <View style={styles.row}>
                        <Card title={'Carpool'} ican={'electric-car'} bgColor={'#78BB9A'} />
                        <Card title={'electric-bike'} ican={'electric-bike'} bgColor={'#6FE0CE'} />
                    </View>
                    <View style={styles.row}>
                        <Card title={'Carpool'} ican={'electric-car'} bgColor={'#78BB9A'} />
                        <Card title={'electric-bike'} ican={'electric-bike'} bgColor={'#6FE0CE'} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const Card = ({ bgColor, ican, title }: { bgColor: string, ican: any, title: string }) => {
    return (
        <View style={[styles.card, { backgroundColor: bgColor }]}>
            <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>{title}</Text>
            <MaterialIcons name={ican} size={80} color="green" />
        </View>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },
    header: {
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        backgroundColor: '#f9f9f9',
    },
    headerText: {
        fontWeight: 'bold',
        letterSpacing: 3,
        fontSize: 21,
    },
    bannerImgView: {
        height: SCREEN_HEIGHT / 4,
        backgroundColor: '#BCBEBD',
        paddingHorizontal: 35,
        paddingTop: 15,
    },
    bannerImg: {
        height: '80%',
        borderRadius: 12,
    },
    infoView: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: -19,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    bottomContainer: {
        flex: 1,
        margin: 20,
        gap: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        gap: 15,
    },
    card: {
        flex: 1,
        borderRadius: 12,
        padding: 20,
        gap: 10,
    },
});
