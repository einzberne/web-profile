import styled from "styled-components";

export default styled.div`
.timeline {
    flex: 0 0 100%;
    max-width: 100%;
    position: relative;
}

.timeline .timeline-item:nth-child(odd) {
    padding-right: calc(50% + 50px);
    text-align: right;
}

.timeline .timeline-item:nth-child(even) {
    padding-left: calc(50% + 50px);
}

.timeline .timeline-item {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 15px;
}

.timeline .timeline-item-inner {
    padding: 30px;
    border-radius: 5px;
    position: relative;
}

.timeline:before {
    content: '';
    width: 1px;
    height: 100%;
    left: 50%;
    top: 0;
    background-color: var(--bg-black-100);
    position: absolute;
}

.timeline .timeline-item:nth-child(odd) .timeline-item-inner:before {
    right: -30px;
}

.timeline .timeline-item:nth-child(even) .timeline-item-inner:before {
    left: -30px;
}

.timeline .timeline-item-inner:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 1px;
    background-color: var(--bg-black-100);
    top: 37px;
    z-index: 1;
}

.timeline .timeline-item:nth-child(odd) .icon {
    right: -70px;
}

.timeline .timeline-item:nth-child(even) .icon {
    left: -70px;
}

.timeline .timeline-item-inner .icon {
    height: 40px;
    width: 40px;
    background-color: var(--dark-color);
    text-align: center;
    border: 1px solid var(--bg-black-100);
    line-height: 40px;
    border-radius: 50%;
    font-size: 16px;
    // color: var(--skin-color);
    position: absolute;
    top: 18px;
}

@media (max-width: 767px) {

    .timeline:before {
        left: 35px;
    }

    .timeline .timeline-item:nth-child(odd) {
        padding-right: 15px;
        text-align: left;
        padding-left: 75px;
    }

   .timeline .timeline-item:nth-child(even) {
        padding-left: 75px;
    }

    .timeline .timeline-item {
        margin-bottom: 40px;
    }

    .timeline .timeline-item:nth-child(odd) .icon {
        right: auto;
        left: -60px;
    }

    .timeline .timeline-item:nth-child(even) .icon {
        left: -60px;
    }

    .timeline .timeline-item:nth-child(odd) .timeline-item-inner:before {
        left: -30px;
    }
}
`;
