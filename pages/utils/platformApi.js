import axios from 'axios';




export const fetchAssignments = async () => {
    const response = await axios.get('/api/platform/assignments');
    return response.data;
};

export const fetchGuestSession = async () => {
    const response = await axios.get('/api/platform/guestSession');
    return response.data;
};

export const fetchModules = async () => {
    const response = await axios.get('/api/platform/modules');
    return response.data;
};

export const fetchSchedules = async () => {
    const response = await axios.get('/api/platform/schedules');
    return response.data;
};

// export const fetchSupportSection = async () => {
//     const response = await axios.get('/api/platform/supportSection');
//     return response.data;
// };

export const fetchVideos = async () => {
    const response = await axios.get('/api/platform/videos');
    return response.data;
};
