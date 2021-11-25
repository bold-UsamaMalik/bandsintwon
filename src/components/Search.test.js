import axios from "axios"

test("API is working", async () => {
  const result = await axios.get(
    `https://rest.bandsintown.com/artists/A?app_id=123`
  )
  expect(result.data.name).toBe("A")
})

test("Edge cases for API", async () => {
  const result = await axios.get(
    `https://rest.bandsintown.com/artists/null/?app_id=123`
  )
  expect(result.data.error).toBe("Not Found")
})

test("Events API Test", async () => {
  const result = await axios.get(
    `https://rest.bandsintown.com/artists/A/events?app_id=123&date=all`
  )
  expect(result.data.length).toBe(206)
})

// all the test caces for the api
