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

export default function FlipkartAccordian() {
  return (
    <div>
      <div className={styles.accordion}>
        <Accordion transition transitionTimeout={250}>
          <AccordionItem
            header={
              <div>
                <h3 className={styles.flipkartproductInfoTitle}>Product details</h3>
              </div>
            }
          >
            <div className={styles.flipkartContainer}>
                <div style={{display:"flex"}}>
                    <div className={styles.pdDelTitle}>Ideal For</div>
                    <div className={styles.pdDelDes}>Women</div>
                </div>
                <div style={{display:"flex"}}>
                    <div className={styles.pdDelTitle}>Ideal For</div>
                    <div className={styles.pdDelDes}>Women</div>
                </div>
                <div style={{display:"flex"}}>
                    <div className={styles.pdDelTitle}>Ideal For</div>
                    <div className={styles.pdDelDes}>Women</div>
                </div>
                <div style={{display:"flex"}}>
                    <div className={styles.pdDelTitle}>Ideal For</div>
                    <div className={styles.pdDelDes}>Women</div>
                </div>
                <div style={{display:"flex"}}>
                    <div className={styles.pdDelTitle}>Ideal For</div>
                    <div className={styles.pdDelDes}>Women</div>
                </div>
                <div style={{display:"flex"}}>
                    <div className={styles.pdDelTitle}>Number of Contents in Sales Package</div>
                    <div className={styles.pdDelDes}>Pack of 1</div>
                </div>
            </div>  
            <div>
            Make a head-turning statement with this stunning georgette chikankari embroidered kurta from Shree Ramkrishna Fab that makes a perfect pick to done for traditional events and festivities. This kurta will be a great addition to your wardrobe. It can be paired with any matching footwear and accessories to create that go-to look.
            </div>
            <div className={styles.manufacturing}>Manufacturing, Packaging and Import Info</div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
