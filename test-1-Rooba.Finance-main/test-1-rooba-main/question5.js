db.users.aggregate([
    {
      $group: {
        _id: null,
        totalUsers: { $sum: 1 },
        averageAge: { $avg: "$age" },
        usersByCountry: {
          $push: {
            country: "$country",
            count: 1
          }
        }
      }
    },
    {
      $unwind: "$usersByCountry"
    },
    {
      $group: {
        _id: "$usersByCountry.country",
        totalUsers: { $sum: "$usersByCountry.count" },
        averageAge: { $avg: "$averageAge" }
      }
    }
  ])
  