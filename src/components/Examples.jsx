import React from "react";
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import { EXAMPLES } from "../data.jsx";


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = React.useState();

    function handleSelect(selectButton) {
        setSelectedTopic(selectButton);
    }

    let tabContent = <p>-</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === 'water'}
                            onClick={() => handleSelect('water')}
                        >
                            water
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'sugar'}
                            onClick={() => handleSelect('sugar')}
                        >
                            sugar
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}
