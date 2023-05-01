import CountUp from 'react-countup';
export default function StudentNumberCounter() {
    return (
        <div className='number-counter'>
            <CountUp start={0} end={10} duration={1.5} prefix='0'
                decimals={2}
                formattingFn={(value) => {
                    return value.toLocaleString();
                }}
            />
        </div>
    )
}