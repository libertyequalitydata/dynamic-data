export const UserOverview = {
  id : "",
  workout_counts : {
    total_workouts: 0,
    workouts: [{
      name: "",
      slug: "",
      count: 0,
      icon_url: "",
      workout_name: "",
    }]
  },
  personal_records : [{
    name: "",
    slug: "",
    first_workout_date: "",
    reset_date: "",
    records: [{
        name: "",
        slug: "",
        value: 0,
        raw_value: 0.0,
        unit: "",
        unit_slug: "",
        workout_id: "",
        workout_date: "",
    }]
  }],
  streaks : {
    current_weekly: 0,
    best_weekly: 0,
    start_date_of_current_weekly: 0,
  },
  achievements : [{
    id: "",
    name: "",
    slug: "",
    image_url: "",
    description: "",
  }],
  }