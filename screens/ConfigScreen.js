import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const PerfilScreens = () => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Configuración general</Text>
            <Text style={styles.subtitulo}>Modificaciones internas del sistema</Text>
            <Pressable style={[styles.boton, styles.botonVerde]}>
                <Text style={styles.botonTexto}>Salir y Volver al inicio</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        padding: 20
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 10
    },
    subtitulo: {
        fontSize: 16,
        color: '#475569',
        marginBottom: 30,
        textAlign: 'center'
    },
    boton: {
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 10,
    },
    botonGris: {
        backgroundColor: '#64748B', // Gris para el botón de salida / cierre
    },
    botonTexto: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default PerfilScreens