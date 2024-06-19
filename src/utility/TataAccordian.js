import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "../style/styles.module.css";
import Arrow from "../Images/Arrow.svg";
import productIcon from "../Images/productIcon.svg";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {header}
          <img
            src={Arrow}
            alt="Chevron Down"
            style={{ width: "16px", height: "16px" }}
          />
        </div>
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default function TataAccordian() {
  return (
    <div>
      <div className={styles.accordion}>
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS  initialEntered*/}
        <Accordion transition transitionTimeout={250}>
          <AccordionItem
            header={
              <div>
                <h3 className={styles.productInfoTitle}>Product details</h3>
                <div className={styles.prodInfo}>
                  Care instructions, Pack contains
                </div>
              </div>
            }
          >
            <div className={styles.prodInfo}>
              Welcome the cool evenings of the new season with some fine fashion
              in this stellar light blue denim jacket from the latest collection
              of Levi's. Beautifully tailored in premium cotton blend for gentle
              softness backed by cosy comfort and enduring strength, it's trendy
              pattern and modern silhouette make it a superb choice for fun
              outings with friends. Put it over denims for a diva look.
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
