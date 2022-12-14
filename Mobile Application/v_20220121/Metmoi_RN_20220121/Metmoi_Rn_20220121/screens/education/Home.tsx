import React, { memo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Button, TopNavigation } from "@ui-kitten/components";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import Container from "components/Container";
import NavigationAction from "components/NavigationAction";
import keyExtractor from "utils/keyExtractor";
import { EducationStackParamList } from "navigation/type";

const Home = memo(() => {
  const { navigate, goBack } =
    useNavigation<NavigationProp<EducationStackParamList>>();
  const data = React.useMemo(
    () => [
      {
        children: "HomePage",
        onPress: () => navigate("HomePage"),
      },
      {
        children: "My Course",
        onPress: () => navigate("MyCourse"),
      },
      {
        children: "Course Details",
        onPress: () => navigate("CourseDetails"),
      },

      {
        children: "Video",
        onPress: () => navigate("VideoCourse"),
      },
      {
        children: "Payment",
        onPress: () => navigate("PaymentEducation"),
      },
      {
        children: "Statistic",
        onPress: () => navigate("CourseStatistic"),
      },
      {
        children: "Student",
        onPress: () => navigate("StudentProfile"),
      },

      {
        children: "Teacher",
        onPress: () => navigate("TeacherProfile"),
      },
    ],
    []
  );

  const renderItem = React.useCallback(({ item }) => {
    return (
      <Button
        children={item.children}
        style={styles.button}
        onPress={item.onPress}
      />
    );
  }, []);

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={() => <NavigationAction onPress={goBack} />}
        title="Education"
      />
      <FlatList
        data={data || []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </Container>
  );
});

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  linear: {
    borderRadius: 12,
    marginHorizontal: 24,
    alignItems: "center",
    marginBottom: 12,
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 24,
    marginVertical: 8,
  },
  contentContainerStyle: {
    paddingTop: 16,
  },
});
