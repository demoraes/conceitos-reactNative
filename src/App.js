import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import api from "./services/api";

export default function App() {
  const [projetcs, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('repositories');

      const repositories = response.data;

      setProjects(repositories);
    }

    loadProjects();
  }, []);

  async function handleLikeRepository(id) {
    // Implement "Like Repository" functionality
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        {projetcs.map(projetc =>
          <View style={styles.repositoryContainer} key={projetc.id}>
            <Text style={styles.repository}>{projetc.title}</Text>

            <View style={styles.techsContainer}>
              {projetc.techs.map(tech =>
                <Text key={tech} style={styles.tech}>
                  {tech}
                </Text>
              )}
            </View>

            <View style={styles.likesContainer}>
              <Text
                style={styles.likeText}
                // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
                testID={`repository-likes-1`}
              >
                3 curtidas
            </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLikeRepository(1)}
              // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
              testID={`like-button-1`}
            >
              <Text style={styles.buttonText}>Curtir</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  repository: {
    fontSize: 32,
    fontWeight: "bold",
  },
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#7159c1",
    padding: 15,
  },
});
