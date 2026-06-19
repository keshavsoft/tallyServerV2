export default ({ inData, column }) => {
    const data = inData || [];

    if (!Array.isArray(data)) {
        return [];
    };

    return [...new Set(
        data.map(row => row[column])
    )];
};