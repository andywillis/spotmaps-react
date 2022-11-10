import { selectorFamily } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const spotmapsDataQuery = selectorFamily({
  key: 'spotmapsDataQuery',
  get: spotmap => async () => {

    const promises = spotmap.map(async spotmap => {
      try {
        const response = await fetch(`/spotmap/${spotmap.id}`);
        if (response.ok) return response.json();
        throw Error('API request not fulfilled');
      } catch (err) {
        console.log(err);
      }
    });

    const spotmaps = await Promise.all(promises);
    return spotmaps;

  }
});
