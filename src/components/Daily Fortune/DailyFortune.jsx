import React, { useEffect, useState } from "react";
import fetchDailyFortune from "../../api/fortuneApi";
import './DailyFortune.scss';

function DailyFortune() {
    const [fortune, setFortune] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getFortune() {
            try {
                const data = await fetchDailyFortune();
                setFortune(data);
            } catch (error) {
                setError("Failed to load fortune.");
            } finally {
                setLoading(false);
            }
        }

        getFortune();
    }, []);

    if (loading) return <p>Loading fortune...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="fortune-card">
            <h3 className="fortune-card__title">Fortune of the Day</h3>
            {fortune ? (
                <div className="fortune-card__desc">
                    <p> {fortune.text}</p>
                    <p>Lucky Numbers: {fortune.numbers}</p>
                </div>
            ) : (
                <p>No fortune data available</p>
            )}
        </div>
    );
}

export default DailyFortune;