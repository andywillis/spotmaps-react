export default function followings(followings) {
  return function (req, res) {
    res.send(followings);
  };
}
